from flask import Flask, request, jsonify
from flask_cors import CORS
from functions.hill_model import Hill_Model

app = Flask(__name__)
CORS(app)

dados_Hill = []
model = Hill_Model()

# Declarar variáveis globais
old_L = None
new_L = None

old_v = None
new_v = None

@app.route('/TesteAlpha', methods=['POST'])
def alpha():
    if request.method == 'POST':
        dados = request.json
        print('Dados recebidos:', dados)
        
        resp = float(dados['alpha'])
        model.teste_do_alfa(resp)
        
    return ''


@app.route('/HillModel', methods=['POST'])
def Hill():
    global old_L, new_L, old_v, new_v # Declarar que vamos usar as variáveis globais

    if request.method == 'POST':
        dados = request.json
        L = dados['input_L']
        t = dados['input_t']
        v = dados['velocidade']
        print(dados)
        
        if L != '' and t != '' or v != '':            
            if old_L is None:
                old_L = L
                new_L = L
                
            old_L = new_L
            new_L = L
            
            if old_v is None:
                old_v = L
                new_v = L
                
            old_v = new_v
            new_v = v
            
            if old_L != new_L or old_v != new_v:
                print("L: ", L)
                print("t: ", t)
                print("v: ", v)
                
                df = model.lab_hill(L, t, v)
                df_json = df.to_json(orient='split')
                
                return jsonify({'df': df_json})
        
    return ''


if __name__ == '__main__':
    app.run(debug=True)
