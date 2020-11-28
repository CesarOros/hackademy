import pymysql

def UserIns(event):
    response = {
        "status": 200,
        "message": "Usuario insertado."
    }
    try:
        db = pymysql.connect("localhost","root","","hackademy")
        cursor = db.cursor()
        sql = """
            INSERT INTO usuario(
                        nombre,
                        correo,
                        kilometros
                        ) 
                VALUES (
                        '{name}',
                        '{mail}',
                        {kilometers}
                        )
        """.format(name=event['name'], mail=event['mail'], kilometers=event['kilometers'])
        cursor.execute(sql)
        db.commit()
    except:
        db.rollback()
        response['status'] = 500
        response['message'] = "Ocurrio un error."
    db.close()
    return response