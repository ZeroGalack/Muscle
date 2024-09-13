import numpy as np
import pandas as pd
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
import os


class Hill_Model:
    def __init__(self) -> None:
        self.a = 37.24
        self.b = 0.335
        self.PO = self.a / 0.257 # 144.90272373540856
        self.vm = self.PO * self.b / self.a
        self.alpha = self.PO / 0.1
        self.Lse0 = 0.3
        self.k = self.a / 25 # 1.4896
        self.steps = 1000
        
        self.segs_exp = 5   
        
        self.Erro_Forca = self.PO / 100 # 1.4490272373540856
        self.Erro_Calor = self.k / 10 # 0.14896 

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
        
         
        H += (self.Erro_Calor) * np.random.randn(len(H))
        P += (self.PO/100) * np.random.randn(len(P))
        
        return P, H, Lse, Lce
    
    
    def calcular_contracao(self, encurtamento, segs_contracao, segs_exp):
        
        seg1 = self.steps // segs_exp
        steps_contracao = int(seg1 * segs_contracao)
        
        steps_resto = (self.steps - steps_contracao) // 2
        
        L1 = np.full(steps_resto, 1)
        L2 = np.linspace(1, 1 - encurtamento, steps_contracao)
        L3 = np.full(steps_resto, 1 - encurtamento)
        
        L = np.concatenate((L1, L2, L3))
        vel_contracao = encurtamento / segs_contracao
        
        return L, vel_contracao
    
    
    def folder_images(self, path='grap_images'):
        current_directory = os.getcwd()
        folder_name = path
        save_path = os.path.join(current_directory, folder_name)
        os.makedirs(save_path, exist_ok=True)
        
        return save_path
    
    
    def contracao_completa_isotonica(self, encurtamento):
        L = np.linspace(1, 1 - encurtamento, self.steps)
        return L
    

    def get_Forca_vel(self, contracao, seg):
        velocidades = []
        forcas = []
        
        segs_contracao = np.linspace(10, seg, 10)        
        
        velocidades.append(0)
        forcas.append(self.PO)
        
        for i in segs_contracao:
            L = self.contracao_completa_isotonica(contracao)
            t = np.linspace(0, i, self.steps)
            
            vel = contracao/i
            
            if len(L) != len(t):
                t = np.delete(t, -1)
            
            # print('vel: ', vel)   
            P, H, Lse, Lce = self.run_Hill(L, t)

            velocidades.append(vel)
            forcas.append(P[-1])

        return velocidades, forcas


    def Lab_forca_comprimento(self, encurtamento, segs_contracao):
        L, vel_contraca = self.calcular_contracao(encurtamento, segs_contracao, segs_exp=5)
        t = np.linspace(0, 5, self.steps)
        
        P, H, Lse, Lce = self.run_Hill(L, t)
        
        save_path = self.folder_images()

        plt.figure()
        fig, ax1 = plt.subplots()

        ax1.plot(t, Lse, label='Lse', color='red')
        ax1.plot(t, Lce, label='Lce', color='purple')

        ax1.set_xlabel('Tempo (s)')
        ax1.set_ylabel('Comprimento (LCE-LSE) (mm)', color='black')
        ax1.tick_params(axis='y', labelcolor='black')
        ax1.set_title('')
        ax1.grid(True)

        ax2 = ax1.twinx()
        ax2.plot(t, P, label='Força (mM/mm²)', color='black')

        ax2.set_ylabel('Força (P) mN/mm²', color='black')
        ax2.tick_params(axis='y', labelcolor='black')

        fig.tight_layout() 
        fig.legend(loc="upper left", bbox_to_anchor=(0,1), bbox_transform=ax1.transAxes)

        plt.savefig(os.path.join(save_path, 'Lab_forca_comprimento.jpg'))
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

        ax = np.linspace(11.171998, self.a*encurtamento + 11.171998 , 10)
        ax += (self.Erro_Calor) * np.random.randn(len(ax))
        encurtamentos = np.linspace(0, encurtamento, 10)

        current_directory = os.getcwd()

        save_path = self.folder_images()

        fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(9, 5))  

        ax1.plot(t, H, label='Calor', color='red')
        ax1.set_xlabel('Tempo (s)')
        ax1.set_ylabel('Calor / volume (H) (mN/mm²)', color='black')
        # ax1.set_title('Calor ao longo do tempo')
        ax1.grid(True)

        ax2.plot(encurtamentos, ax, label='Excesso de calor', color='purple', marker='o', linestyle='None')
        ax2.set_xlabel('Encurtamento (x) (mm)')
        ax2.set_ylabel('Excesso Calor (Hₑ) / volume (mN/mm²)', color='black')
        # ax2.set_title('Excesso de calor vs Encurtamento')
        ax2.grid(True)

        ax1.set_xlim([0, 5])
        ax1.set_ylim([0, 35])
        ax2.set_xlim([0, 0.5])
        ax2.set_ylim([0, 35])

        ax1.legend()
        ax2.legend()

        fig.tight_layout()
        plt.savefig(os.path.join(save_path, 'Excesso_calor.jpg'))
        plt.close()
        
        
        encurtamentos = np.linspace(0, encurtamento, self.steps)
        ax = np.linspace(11.171998, self.a*encurtamento + 11.171998 , self.steps)
        ax += (self.Erro_Calor) * np.random.randn(len(ax))
        
        df = pd.DataFrame({
            't': t,
            'L': L,
            'H': H,
            'x': encurtamentos,
            'Hx': ax
        })

        return df
    
    def taxa_Energia(self, encurtamento, segs_contracao):

        L = np.linspace(1, 1 - encurtamento, self.steps)
        t = np.linspace(0, segs_contracao, self.steps)
        
        P, H, Lse, Lce = self.run_Hill(L, t)
        
        taxa_Energia = np.linspace(self.b * self.PO, -self.b * (P[-1] - self.PO), 10)
        taxa_Energia += (self.PO/100) * np.random.randn(len(taxa_Energia))
        
        forcas = np.linspace(0, P[-1], 10)
        
        
        save_path = self.folder_images()

        fig, ax1 = plt.subplots()

        ax1.plot(forcas, taxa_Energia, label='Taxa de Energia', color='purple', marker='o', linestyle='None')
        ax1.set_xlabel('Força (P) (mN/mm²)')
        ax1.set_ylabel('Taxa de Energia (dE) / volume (mN/mm².s)', color='black')
        # ax1.set_title('Taxa de Energia vs Força')
        ax1.grid(True)

        ax1.set_xlim([0, 150])
        ax1.set_ylim([0, 50])

        plt.savefig(os.path.join(save_path, 'Taxa_Energia.jpg'))
        plt.close()

        
        df = pd.DataFrame({
            'P': forcas,
            'dE': taxa_Energia
        })

        return df
    
    
    def Forca_velocidade(self, encurtamento, segs_contracao):
                
        velocidades, forcas = self.get_Forca_vel(encurtamento, segs_contracao)
      
        if encurtamento == 0:
            forcas = [self.PO] * 10
            velocidades = [0] * 10
      
        save_path = self.folder_images()

        fig, ax1 = plt.subplots()

        ax1.plot(velocidades, forcas, label='forcas', marker='o', color='purple',  linestyle='None')
        ax1.set_xlabel('velocidade (v) (mm/seg)')
        ax1.set_ylabel('Força (P) (mM/mm²)', color='black')
        # ax1.set_title('forcas vs velocidades')
        ax1.grid(True)

        ax1.set_xlim([0, 1.5])
        ax1.set_ylim([0, 150])

        plt.savefig(os.path.join(save_path, 'Forca_velocidade.jpg'))
        plt.close()
        

        df = pd.DataFrame({
            'v': velocidades,
            'P': forcas
        })

        return df
    
    
    def limpa_graficos(self):
        save_path = self.folder_images()
        
        fig, ax1 = plt.subplots()
        plt.savefig(os.path.join(save_path, 'Lab_forca_comprimento.jpg'))
        plt.savefig(os.path.join(save_path, 'Forca_velocidade.jpg'))
        plt.savefig(os.path.join(save_path, 'Taxa_Energia.jpg'))
        
        
        fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(9, 5))
        plt.savefig(os.path.join(save_path, 'Excesso_calor.jpg'))
        plt.close()
        

if __name__ == '__main__':
    modelo = Hill_Model()