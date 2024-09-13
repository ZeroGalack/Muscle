from flask import Flask, request, jsonify
from flask_cors import CORS
from functions.Hill import Hill_Model

app = Flask(__name__)
CORS(app)

dados_Hill = []
modelo = Hill_Model()


@app.route('/plot_grafico', methods=['POST'])
def Lab_forca_comprimento():
    
    if request.method == 'POST':
        dados = request.json
        print('Dados recebidos:', dados)
        
        x = dados['x']
        vel = dados['vel']
        id = dados['id']
        x = -x
            
        if x == abs(100):
            modelo.limpa_graficos()
            return ''

        else:
            if id == 'Lab_forca_comprimento':            
                if x != '' or vel != '':     
                    print("x: ", x)
                    df = modelo.Lab_forca_comprimento(x, vel)        
                    df_json = df.to_json(orient='split')
                    
                    return jsonify({'df': df_json})
                
                
            if id == 'Lab_Excesso_calor':
                if x != '' or vel != '': 
                    print("x: ", x)
                    df = modelo.Excesso_calor(x, vel)        
                    df_json = df.to_json(orient='split')
                
                    return jsonify({'df': df_json})     
                    
                    
            if id == 'Lab_taxa_Energia':
                if x != '' or vel != '': 
                    #print("x: ", x)
                    df = modelo.taxa_Energia(x, vel)        
                    df_json = df.to_json(orient='split')
                    
                    return jsonify({'df': df_json}) 
                
                
            if id == 'lab_Forca_velocidade':
                if x != '' or vel != '': 
                    print("x: ", x)
                    df = modelo.Forca_velocidade(x, vel)        
                    df_json = df.to_json(orient='split')
                    
                    return jsonify({'df': df_json})    
                    
    return ''


if __name__ == '__main__':
    app.run(debug=True)
