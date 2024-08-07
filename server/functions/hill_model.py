import numpy as np
import pandas as pd
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt

class Hill_Model:
    def __init__(self) -> None:
        ...
    
    def hill_model(self, L, t, alpha=1449.0272):
        a = 37.24
        b = 0.325
        PO = a / 0.257
        vm = PO * b / a
        Lse0 = 0.3
        k = a / 25

        Lse = np.full(len(t), Lse0)
        Lce = np.full(len(t), 1 - Lse0)
        
        H = np.zeros(len(t))
        P = np.zeros(len(t))

        for j in range(len(t) - 1):
            Lse[j] = Lse0 + P[j] / alpha
            Lce[j] = L[j] - Lse[j]
            
            dt = t[j + 1] - t[j]
            dL = (L[j + 1] - L[j])
            
            v = b * ((PO - P[j]) / (a + P[j]))
                    
            dP = alpha * ((dL / dt) + b * v) * dt
            
            P[j + 1] = P[j] + dP
            H[j + 1] = H[j] + (k + a * b * v) * dt

        Lse[-1] = Lse0 + P[-1] / alpha
        Lce[-1] = L[-1] - Lse[-1]
        
        return P, H, Lse, Lce

    def run_model(self, L, t, v=1):
        t_array = np.linspace(0.0, 5.0, t)
        
        # Calcule o comprimento para as duas metades
        contracao = int(v*(len(t_array)/5))
        half_len = int(abs((len(t_array) - contracao)//2))
        
        print(contracao)
        print(half_len)
        print(half_len+contracao+half_len)
        
 
        lengths_1 = np.linspace(1, 1, half_len)
        lengths_2 = np.linspace(1, 1 + L, contracao)
        lengths_3 = np.linspace(1 + L, 1 + L, half_len)
        
        lengths = np.concatenate((lengths_1, lengths_2, lengths_3))

        P, H, Lse, Lce = self.hill_model(L=lengths, t=t_array)
        
        data = {
            'L': lengths,
            't': t_array,
            'P': P,
            'H': H,
            'Lse': Lse,
            'Lce': Lce
        }

        df = pd.DataFrame(data)
        
        return df

    def plot(self, df):
        fig, ax1 = plt.subplots()
        ax1.plot(df['t'], df['Lse'], color='m', label='Lse')
        ax1.plot(df['t'], df['Lce'], color='c', label='Lce')
        ax1.set_ylabel('Comprimento dos elementos Lce e Lse')
        ax1.legend(loc='upper left')
        ax1.set_xlabel('Tempo (t)')
        plt.grid(True)
        fig.savefig('../src/assets/img/graf-1.png')
        plt.close()  
        
        fig, ax1 = plt.subplots()
        ax1.plot(df['t'], df['P'], color='black', label='Força')
        ax1.set_ylabel('Força (mN/mm²)')
        ax1.set_xlabel('Tempo (t)')
        plt.grid(True)
        fig.savefig('../src/assets/img/graf-2.png')
        plt.close()  
        
        fig, ax1 = plt.subplots()
        ax1.plot(df['t'], df['H'], color='red', label='Calor')
        ax1.set_ylabel('Volume de calor')
        ax1.set_xlabel('Tempo')
        plt.grid(True)
        fig.savefig('../src/assets/img/graf-3.png')
        plt.close()  
        
        fig, ax1 = plt.subplots()
        ax1.plot(df['t'], df['L'], color='blue', label='Calor')
        ax1.set_ylabel('Comprimento total do musculo')
        ax1.set_xlabel('Tempo')
        plt.grid(True)
        fig.savefig('../src/assets/img/graf-4.png')
        plt.close()  


    def teste_do_alfa(self, alpha):
        t_array = np.linspace(0.0, 5.0, 1000)
        lengths = np.linspace(1, 1, len(t_array))

        P, H, Lse, Lce = self.hill_model(L=lengths, t=t_array, alpha=alpha)
        
        data = {
            'L': lengths,
            't': t_array,
            'P': P,
            'H': H,
            'Lse': Lse,
            'Lce': Lce
        }

        df = pd.DataFrame(data)
        
        P2, H2, Lse2, Lce2 = self.hill_model(L=lengths, t=t_array)
        
        data2 = {
            'L': lengths,
            't': t_array,
            'P': P2,
            'H': H2,
            'Lse': Lse2,
            'Lce': Lce2
        }

        df2 = pd.DataFrame(data2)
        
        fig, ax1 = plt.subplots()
        ax1.plot(df['t'], df['P'], color='red', label='Força α testado')
        ax1.plot(df2['t'], df2['P'], color='green', label='Força α real')
        ax1.legend(loc='upper left')
        ax1.set_ylabel('Força (mN/mm²)')
        ax1.set_xlabel('Tempo (t)')
        plt.grid(True)
        fig.savefig('../src/assets/img/Teste-alpha.png')
        plt.close()
    
    def lab_hill(self, L, t, v):
        L = float(L)
        t = int(t)
        v = int(v)
        
        df = self.run_model(L, t, v)
        self.plot(df)
        
        return df
    
    def testeCalor(self):
        t_array = np.linspace(0.0, 5.0, 1_000)
        lengths = np.linspace(1, 1, len(t_array))

        P, H, Lse, Lce = self.hill_model(L=lengths, t=t_array)
        
        data = {
            'L': lengths,
            't': t_array,
            'P': P,
            'H': H,
            'Lse': Lse,
            'Lce': Lce
        }

        df = pd.DataFrame(data)
        
        fig, ax1 = plt.subplots()
        ax1.plot(df['t'], df['H'], color='red', label='Calor')
        ax1.set_ylabel('Volume de calor')
        ax1.set_xlabel('Tempo')
        plt.grid(True)
        fig.savefig('../src/assets/img/Calor.png')
        plt.close()

if __name__ == '__main__':
    model = Hill_Model()
    model.testeCalor()
