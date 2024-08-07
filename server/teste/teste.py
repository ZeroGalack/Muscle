import numpy as np
import pandas as pd
import matplotlib.pyplot as plt

# class HillModel:
#     def hill_model(self, L, t, alpha=1449.0272):
#         a = 380 * 0.098  # 37.24
#         b = 0.325
#         PO = a / 0.257  # 144.9027
#         vm = PO * b / a
#         Lse0 = 0.3
#         k = a / 25

#         Lse = np.full(len(t), Lse0)
#         Lce = np.full(len(t), 1 - Lse0)

#         H = np.zeros(len(t))
#         P = np.zeros(len(t))

#         for j in range(len(t) - 1):
#             Lse[j] = Lse0 + P[j] / alpha
#             Lce[j] = L[j] - Lse[j]
            
#             dt = t[j + 1] - t[j]
#             dL = (L[j + 1] - L[j])
            
#             v = b * ((PO - P[j]) / (a + P[j]))
                    
#             dP = alpha * ((dL / dt) + b * v) * dt
            
#             P[j + 1] = P[j] + dP
#             H[j + 1] = H[j] + (k + a * b * v) * dt

#         Lse[-1] = Lse0 + P[-1] / alpha
#         Lce[-1] = L[-1] - Lse[-1]

#         return P, H, Lse, Lce

#     def testeCalor(self):
#         t_array = np.linspace(0.0, 5.0, 1000)

#         lengths = (2 * (t_array**2 - 5*t_array + 6)) + 1

#         # Mantém apenas os valores positivos
#         lengths = np.where(lengths < 1, lengths, 1)
        
#         P, H, Lse, Lce = self.hill_model(L=lengths, t=t_array)
        
#         data = {
#             'L': lengths,
#             't': t_array,
#             'P': P,
#             'H': H,
#             'Lse': Lse,
#             'Lce': Lce
#         }

#         df = pd.DataFrame(data)
        
#         fig, ax1 = plt.subplots()
        
#         ax1.plot(df['t'], df['H'], color='red', label='Heat')
#         ax1.set_ylabel('Volume de calor', color='black')
#         ax1.set_xlabel('Tempo', color='black')
        
#         ax2 = ax1.twinx()
#         ax2.plot(df['t'], lengths, color='blue', linestyle='dashed', label='Tension')
#         ax2.set_ylabel('Tensão', color='black')

#         fig.legend(loc='upper left', bbox_to_anchor=(0.1, 0.9))
#         plt.grid(True)
#         plt.show()

# # Exemplo de uso
# modelo = HillModel()
# modelo.testeCalor()




# def hill_model(L, t, alpha=1449.0272, external_load=None):
#     # if external_load is None:
#     #     external_load = np.zeros(len(t))

#     a = (380 * 0.098) # = 37.24
#     b = 0.325
#     PO = a / 0.257 # = 144.9027
#     vm = PO * b / a
#     Lse0 = 0.3
#     k = a / 25

#     Lse = np.full(len(t), Lse0)
#     Lce = np.full(len(t), 1 - Lse0)

#     H = np.zeros(len(t))
#     P = np.zeros(len(t))

#     for j in range(len(t) - 1):
#         Lse[j] = Lse0 + P[j] / alpha
#         Lce[j] = L[j] - Lse[j]
        
#         dt = t[j + 1] - t[j]
#         dL = (L[j + 1] - L[j])
        
#         v = b * ((PO - P[j]) / (a + P[j]))
#         dP = alpha * ((dL / dt) + b * v) * dt
        
#         P[j + 1] = P[j] + dP - external_load[j] 
#         H[j + 1] = H[j] + (k + a * b * v) * dt

#     Lse[-1] = Lse0 + P[-1] / alpha
#     Lce[-1] = L[-1] - Lse[-1]

#     return P, H, Lse, Lce


def hill_model(L, t, alpha=1449.0272):
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


t_array = np.linspace(0.0, 5.0, 1000)

# lengths = (6 * (t_array**2 - 5*t_array + 6)) + 2

# # Mantém apenas os valores positivos
# lengths = np.where(lengths < 1, lengths, 1)
#lengths = np.linspace(1, 1, len(t_array))

# # Ou com uma carga variável
# external_load = 6 * (-t_array**2 + 5*t_array - 6)
# external_load = np.where(external_load > 0, external_load, 0) # np.linspace(1.0, 1.0, 10000) 
import numpy as np
import matplotlib.pyplot as plt
from scipy.interpolate import UnivariateSpline

# v = 1
# L = -0.2


# # Calcule o comprimento para as duas metades
# contracao = int(v*(len(t_array)/5))
# half_len = int(abs((len(t_array) - contracao)//2))

# print(contracao)
# print(half_len)
# print(half_len+contracao+half_len)


# lengths_1 = np.linspace(1, 1, 250)
# lengths_2 = np.linspace(1, 1 + L, 250)
# lengths_3 = np.linspace(1, 1 - L, 250)
# lengths_3 = np.linspace(1 + L, 1 + L, 250)

# lengths = np.concatenate((lengths_1, lengths_2, lengths_3))


lengths_1 = np.linspace(1, 1, 500)
lengths_2 = np.linspace(1, 0.8, 500)
lengths = np.concatenate((lengths_1, lengths_2))

time = np.linspace(0, len(lengths) - 1, len(lengths))

# Interpolação spline
spline = UnivariateSpline(time, lengths, s=0.01)  # s é o parâmetro de suavização

# Gerar pontos suavizados
time_smooth = np.linspace(time.min(), time.max(), 1000)
lengths = spline(time_smooth)
# lengths_smooth = np.where(lengths_smooth < 1, lengths_smooth, 1)



P, H, Lse, Lce = hill_model(lengths, t_array)

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
# ax1.set_ylabel('Volume de calor', color='black')
ax1.set_xlabel('Tempo', color='black')

ax2 = ax1.twinx()
ax2.plot(df['t'], lengths, color='blue', linestyle='dashed', label='Tensão')
ax2.set_ylabel('external_load', color='black')

fig.legend(loc='upper left', bbox_to_anchor=(0.1, 0.9))
plt.grid(True)
plt.show()