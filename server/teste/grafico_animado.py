import numpy as np
import matplotlib.pyplot as plt
from matplotlib.animation import FuncAnimation, PillowWriter

# Dados de exemplo
x = np.linspace(0, 2 * np.pi, 100)
y = np.sin(x)

# Configurar a figura e o eixo
fig, ax = plt.subplots()
line, = ax.plot(x, y)

# Função de animação
def update(frame):
    line.set_ydata(np.sin(x + frame / 10.0))  # Atualizar os dados de y
    return line,

# Criar a animação
ani = FuncAnimation(fig, update, frames=100, blit=True)

# Salvar a animação como GIF
ani.save('grafico_animado.gif', writer=PillowWriter(fps=60))

plt.show()
