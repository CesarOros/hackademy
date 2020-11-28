from endpoints import Controller
import conexion 

class Default(Controller):
    def GET(self):
        return "Bienvenido al registro de kilometros. :)"

    def POST(self, **kwargs):
        print("event:", kwargs)
        response = {
            "status": 200
        }
        try:
            if float(kwargs['kilometers']) > 4:
                response = conexion.UserIns(kwargs)
                print(response)
            else:
                response['message'] = "Debes esforzarte un poco mas. :)"
        except:
            response['status'] = 500
        return response

