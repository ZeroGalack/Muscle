import numpy as np
import matplotlib

# Configuração para o modo não interativo
matplotlib.use('Agg')
import matplotlib.pyplot as plt


class Hooke:
    def __init__(self) -> None:

        self.tempo = np.linspace(-1, 2, 300)
        
    
    def plot_Hooke(self, dados_Hooke):
        
        fig, ax1 = plt.subplots()
        fig, ax2 = plt.subplots()
        
        
        for idx, dados in enumerate(dados_Hooke):
            k, d = dados
            
            if k != None and d != None:
                deslocamento = np.where((self.tempo >= 0) & (self.tempo <= 1), d, 0)    
                forca = deslocamento * k

                ax1.plot(self.tempo, deslocamento, color='C'+str(idx))
                ax2.plot(self.tempo, forca, color='C'+str(idx+1))
            
                ax1.text(1.1, d, f'k={k}, d={d}', color='C'+str(idx))
                ax2.text(1.1, d * k, f'k={k}, d={d}', color='C'+str(idx+1))
                
            else:
                ax1.plot([], [], color='C'+str(idx))
                ax2.plot([], [], color='C'+str(idx+1))
                        
        ax1.set_xlabel('Tempo (Segundos)')
        ax1.set_ylabel('Comprimento da Mola (metros)')
        ax1.set_title('Comprimento da Mola vs. Tempo')
        ax1.set_xlim(-1, 2)
        
        _, limit_y =  ax1.get_ylim()
        if int(limit_y) > 0:    ax1.set_ylim(0, int(limit_y) + 1)
        else:                   ax1.set_ylim(0, int(limit_y) - 1)


        ax2.set_xlabel('Tempo (segundos)')
        ax2.set_ylabel('Força (newton )')
        ax2.set_title('Força vs. Tempo')
        ax2.set_xlim(-1, 2)
        
        _, limit_y =  ax2.get_ylim()
        if int(limit_y) > 0:    ax2.set_ylim(0, int(limit_y) + 1)
        else:                   ax2.set_ylim(0, int(limit_y) - 1)
            
        ax1.figure.savefig('../src/assets/img/Deslocamento_vs_Tempo.png')
        ax2.figure.savefig('../src/assets/img/Forca_vs_Tempo.png')  
    
        ax2.figure.savefig('../src/assets/img/Validacao_teste1.png')
        
        plt.close(fig)



    def plot_teste(self, dados_teste, resposta, n_teste = 0):
        
        fig, ax = plt.subplots()
        
        forca = 0
        forca_real = 0 
        
        for idx, dados in enumerate(dados_teste):
            print("dados teste: ", dados_teste)
            k, d = dados
            deslocamento = np.where((self.tempo >= 0) & (self.tempo <= 1), d, 0)    
            forca_real = deslocamento * k
            
            ax.plot(self.tempo, forca_real, color='green')
            ax.text(1.1, d * k, f'Resposta correta', color='green')
            
            expression = resposta
            expression = expression.replace('d', 'deslocamento')
            expression = eval(expression)

            forca = expression            
            ax.plot(self.tempo, forca, color='red')
                
        ax.set_xlabel('time (s)')
        ax.set_ylabel('force (N)')
        ax.set_title('Força vs. Tempo')
        
        ax.figure.savefig(f'../src/assets/img/k={str(n_teste)}.png')
        
        plt.close(fig)

        if np.array_equal(forca, forca_real): 
            print("Resposta Correta!")
            return 1
        else:
            print("Resposta Incorreta!!!")
            return 0
         
    
if __name__ == '__main__':

    hooke = Hooke()
    resposta = "d/k"
    
    k = 1
    hooke.plot_teste(dados_teste=[(k,1)], resposta=resposta, n_teste=k)
    k = 2
    hooke.plot_teste(dados_teste=[(k,1)], resposta=resposta, n_teste=k)
    k = 0.5
    hooke.plot_teste(dados_teste=[(k,1)], resposta=resposta, n_teste=k)
    
    