from flask import Flask, request, jsonify
from flask_cors import CORS
from functions.Hill import Hill_Model

app = Flask(__name__)
CORS(app)

dados_Hill = []
modelo = Hill_Model()


old_x = None
new_x= None

old_v = None
new_v = None


@app.route('/Lab_forca_comprimento', methods=['POST'])
def Lab_forca_comprimento():
    global old_x, new_x, old_v, new_v
    
    if request.method == 'POST':
        dados = request.json
        print('Dados recebidos:', dados)
        
        x = dados['x']
        vel = dados['vel']
        limpar = dados['limpar']

        x = -x
        
        if x != '' or vel != '':            
            if old_x is None:
                old_x = x
                new_x = x
                
            old_x = new_x
            new_x = x
        
            if old_v is None:
                old_v = vel
                new_v = vel
            
            old_v = new_v
            new_v = vel
            
            
            if old_x != new_x or old_v != new_v:
                print("x: ", x)
                df = modelo.Lab_forca_comprimento(x, vel)        
                df_json = df.to_json(orient='split')
                
                return jsonify({'df': df_json})
    return ''


@app.route('/Excesso_calor', methods=['POST'])
def Excesso_calor():
    global old_x, new_x, old_v, new_v
    
    if request.method == 'POST':
        dados = request.json
        print('Dados recebidos Calor:', dados)
        
        x = dados['x']
        vel = dados['vel']
        limpar = dados['limpar']

        x = -x
        
        if x != '' or vel != '':            
            if old_x is None:
                old_x = x
                new_x = x
                
            old_x = new_x
            new_x = x
        
            if old_v is None:
                old_v = vel
                new_v = vel
            
            old_v = new_v
            new_v = vel
            
            
            if old_x != new_x or old_v != new_v:
                print("x: ", x)
                df = modelo.Excesso_calor(x, vel)        
                df_json = df.to_json(orient='split')
                
                return jsonify({'df': df_json})     
    return ''


@app.route('/Taxa_Energia', methods=['POST'])
def Taxa_Energia():
    global old_x, new_x, old_v, new_v
    
    if request.method == 'POST':
        dados = request.json
        print('Dados recebidos Taxa_Energia:', dados)
        
        x = dados['x']
        vel = dados['vel']
        limpar = dados['limpar']

        x = -x
        
        if x != '' or vel != '':            
            if old_x is None:
                old_x = x
                new_x = x
                
            old_x = new_x
            new_x = x
        
            if old_v is None:
                old_v = vel
                new_v = vel
            
            old_v = new_v
            new_v = vel
            
            
            if old_x != new_x or old_v != new_v:
                #print("x: ", x)
                df = modelo.taxa_Energia(x, vel)        
                df_json = df.to_json(orient='split')
                
                return jsonify({'df': df_json})     
    return ''


@app.route('/Forca_velocidade', methods=['POST'])
def Forca_velocidade():
    global old_x, new_x, old_v, new_v
    
    if request.method == 'POST':
        dados = request.json
        print('Dados recebidos Forca_velocidade:', dados)
        
        x = dados['x']
        vel = dados['vel']
        limpar = dados['limpar']

        x = -x
        
        if x != '' or vel != '':            
            if old_x is None:
                old_x = x
                new_x = x
                
            old_x = new_x
            new_x = x
        
            if old_v is None:
                old_v = vel
                new_v = vel
            
            old_v = new_v
            new_v = vel
            
            
            if old_x != new_x or old_v != new_v:
                #print("x: ", x)
                df = modelo.Forca_velocidade(x, vel)        
                df_json = df.to_json(orient='split')
                
                return jsonify({'df': df_json})     
    return ''


if __name__ == '__main__':
    app.run(debug=True)
