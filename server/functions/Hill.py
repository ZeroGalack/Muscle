import numpy as np
import pandas as pd
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
# import matplotlib.ticker as ticker
import os


class Hill_Model:
    def __init__(self) -> None:
        self.a = 37.24
        self.b = 0.335
        self.PO = self.a / 0.257
        self.vm = self.PO * self.b / self.a
        self.alpha = self.PO / 0.1
        self.Lse0 = 0.3
        self.k = self.a / 25
        self.steps = 1000
        
        self.segs_exp = 5   

    def run_Hill(self, L, t):
        Lse = np.full(len(t), self.Lse0)
        Lce = np.full(len(t), 1 - self.Lse0)
        H = np.zeros(len(t))
        P = np.zeros(len(t))

        for j in range(len(t) - 1):
            Lse[j] = self.Lse0 + P[j] / self.alpha
            Lce[j] = L[j] - Lse[j]
            dt = t[j + 1] - t[j]
            dL = L[j + 1] - L[j]
            v = self.b * (self.PO - P[j]) / (self.a + P[j])
            dP = self.alpha * (dL / dt + v) * dt
            P[j + 1] = P[j] + dP
            dH = (self.a * v + self.k) * dt
            H[j + 1] = H[j] + dH

        Lse[-1] = self.Lse0 + P[-1] / self.alpha
        Lce[-1] = L[-1] - Lse[-1]
        return P, H, Lse, Lce
    
    
    def calcular_contracao(self, encurtamento, segs_contracao, segs_exp):
        
        seg1 = self.steps // segs_exp
        
        
        steps_contracao = int(seg1 * segs_contracao)
        #print(steps_contracao)
        
        steps_resto = (self.steps - steps_contracao) // 2
        
        L1 = np.full(steps_resto, 1)
        L2 = np.linspace(1, 1 - encurtamento, steps_contracao)
        L3 = np.full(steps_resto, 1 - encurtamento)
        
        L = np.concatenate((L1, L2, L3))
        
        vel_contracao = encurtamento / segs_contracao
        
        return L, vel_contracao
    
    def get_energia(self, seg):

        taxa_Energia = []
        forcas = []
        
        Energia = []
        
        segs_contracao = np.linspace(0.1, seg, self.steps)
        
        for s in segs_contracao:
            L, vel = self.calcular_contracao(0.1, s, s)
            t = np.linspace(0, s, self.steps)
            
            if len(L) != len(t):
                t = np.delete(t, -1)
                
            P, H, Lse, Lce = self.run_Hill(L, t)
            
            print('vel: ', vel)
                        
            forcas.append(P[-1])
            taxa_Energia.append( (P[-1] + self.a) * vel )

        return taxa_Energia, forcas


    def get_Forca_vel(self, seg):

        velocidades = []
        forcas = []
        
        segs_contracao = np.linspace(seg, 100, self.steps)
        
        for s in segs_contracao:
            L, vel = self.calcular_contracao(0.5, s, s)
            t = np.linspace(0, s, self.steps)
            
            if len(L) != len(t):
                t = np.delete(t, -1)
                
            P, H, Lse, Lce = self.run_Hill(L, t)
            
            print('vel: ', vel)
  
            velocidades.append(vel)
            forcas.append(P[-1])

        return velocidades, forcas

    def Lab_forca_comprimento(self, encurtamento, segs_contracao):
        L, vel_contraca = self.calcular_contracao(encurtamento, segs_contracao, segs_exp=5)
        t = np.linspace(0, 5, self.steps)
        
        P, H, Lse, Lce = self.run_Hill(L, t)
        
        
        current_directory = os.getcwd()

        # Defina a pasta onde as imagens serão salvas
        folder_name = 'grap_images'
        save_path = os.path.join(current_directory, folder_name)

        # Cria a pasta se ela não existir
        os.makedirs(save_path, exist_ok=True)

        plt.figure()

        # Plot Lse e Lce no eixo Y esquerdo
        fig, ax1 = plt.subplots()

        ax1.plot(t, Lse, label='Lse', color='red')
        ax1.plot(t, Lce, label='Lce', color='purple')

        # Eixo Y esquerdo
        ax1.set_xlabel('Tempo (s)')
        ax1.set_ylabel('Comprimento', color='black')
        ax1.tick_params(axis='y', labelcolor='black')
        ax1.set_title('Comprimento dos Elementos e Força ao longo do tempo')
        ax1.grid(True)

        # Criar um segundo eixo Y no lado direito
        ax2 = ax1.twinx()
        ax2.plot(t, P, label='Força', color='black')

        # Eixo Y direito para a força P
        ax2.set_ylabel('Força (P)', color='black')
        ax2.tick_params(axis='y', labelcolor='black')

        # Adicionar legendas para os dois eixos
        fig.tight_layout()  # Ajustar layout para que os rótulos não se sobreponham
        fig.legend(loc="upper left", bbox_to_anchor=(0,1), bbox_transform=ax1.transAxes)

        # Salvar a figura
        plt.savefig(os.path.join(save_path, 'Lab_forca_comprimento.png'))
        plt.close()

        df = pd.DataFrame({
            't': t,
            'L': L,
            'P': P,
            'Lse': Lse,
            'Lce': Lce,
        })

        return df


    def Excesso_calor(self, encurtamento, segs_contracao):
        L, vel_contraca = self.calcular_contracao(encurtamento, segs_contracao, segs_exp=5)
        t = np.linspace(0, 5, self.steps)

        P, H, Lse, Lce = self.run_Hill(L, t)

        ax = np.linspace(11.171998, self.a*encurtamento + 11.171998 , self.steps)
        encurtamentos = np.linspace(0, encurtamento, self.steps)

        current_directory = os.getcwd()

        # Defina a pasta onde as imagens serão salvas
        folder_name = 'grap_images'
        save_path = os.path.join(current_directory, folder_name)

        # Cria a pasta se ela não existir
        os.makedirs(save_path, exist_ok=True)

        # Cria uma figura com dois subplots lado a lado
        fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(9, 5))  # figsize ajusta o tamanho da figura

        # Primeiro gráfico (Calor)
        ax1.plot(t, H, label='Calor', color='red')
        ax1.set_xlabel('Tempo (s)')
        ax1.set_ylabel('Calor', color='black')
        ax1.set_title('Calor ao longo do tempo')
        ax1.grid(True)

        # Segundo gráfico (Excesso de calor)
        ax2.plot(encurtamentos, ax, label='Excesso de calor', color='purple')
        ax2.set_xlabel('Encurtamento')
        ax2.set_ylabel('Excesso de calor', color='black')
        ax2.set_title('Excesso de calor vs Encurtamento')
        ax2.grid(True)

        # Ajusta os limites dos eixos
        ax1.set_xlim([0, 5])
        ax1.set_ylim([0, 35])
        ax2.set_xlim([0, 0.5])
        ax2.set_ylim([0, 35])

        # Adicionar legendas
        ax1.legend()
        ax2.legend()

        # Ajusta o layout para que os gráficos não se sobreponham
        fig.tight_layout()

        # Salvar a figura
        plt.savefig(os.path.join(save_path, 'Excesso_calor.png'))
        plt.close()

        df = pd.DataFrame({
            't': t,
            'L': L,
            'H': H,
            'x': encurtamentos,
            'Hx': ax
        })

        return df
    
    def taxa_Energia(self, encurtamento, segs_contracao):

        if encurtamento == 0:
            segs_contracao = 100 


        taxa_Energia, forcas = self.get_energia(segs_contracao)
        
        
        current_directory = os.getcwd()

        # Defina a pasta onde as imagens serão salvas
        folder_name = 'grap_images'
        save_path = os.path.join(current_directory, folder_name)

        # Cria a pasta se ela não existir
        os.makedirs(save_path, exist_ok=True)

        fig, ax1 = plt.subplots()

        ax1.plot(forcas, taxa_Energia, label='Taxa de Energia', color='purple')
        ax1.set_xlabel('Forca')
        ax1.set_ylabel('Taxa de Energia', color='black')
        ax1.set_title('Taxa de Energia vs Força')
        ax1.grid(True)

        ax1.set_xlim([0, 150])
        ax1.set_ylim([0, 50])

        plt.savefig(os.path.join(save_path, 'Taxa_Energia.png'))
        plt.close()

        df = pd.DataFrame({
            'P': forcas,
            'dE': taxa_Energia
        })

        return df
    
    
    def Forca_velocidade(self, encurtamento, segs_contracao):
        
        if encurtamento == 0:
            segs_contracao = 100


        velocidades, forcas = self.get_Forca_vel(segs_contracao)
        
        
        current_directory = os.getcwd()

        # Defina a pasta onde as imagens serão salvas
        folder_name = 'grap_images'
        save_path = os.path.join(current_directory, folder_name)

        # Cria a pasta se ela não existir
        os.makedirs(save_path, exist_ok=True)

        fig, ax1 = plt.subplots()

        ax1.plot(velocidades, forcas, label='forcas', color='purple')
        ax1.set_xlabel('velocidades')
        ax1.set_ylabel('força', color='black')
        ax1.set_title('forcas vs velocidades')
        ax1.grid(True)

        ax1.set_xlim([0, 1])
        ax1.set_ylim([0, 150])

        plt.savefig(os.path.join(save_path, 'Forca_velocidade.png'))
        plt.close()

        df = pd.DataFrame({
            'v': velocidades,
            'P': forcas
        })

        return df


if __name__ == '__main__':
    modelo = Hill_Model()

