from flask import Flask, jsonify, request,session
from flask_cors import CORS
from flask_mysqldb import MySQL

# configuration
DEBUG = True

# instantiate the app
app = Flask(__name__)
app.secret_key = "super secret key"
app.config.from_object(__name__)
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'flask'

mysql = MySQL(app)

# enable CORS
CORS(app, resources={r'/*': {'origins': '*'}})

# sanity check route
'''@app.route('/ping', methods=['GET'])
def ping_pong():
        return jsonify('pong!')'''
 
@app.route('/signup', methods = ['POST', 'GET'])
def signup():
    response_object = {'status': 'success'}
    if request.method == 'GET':
        return "Login via the login Form"
     
    if request.method == 'POST':
        post_data = request.get_json()
        username = post_data.get('username'),
        password = post_data.get('password'),
        email = post_data.get('email'),
        phone = post_data.get('phone'),
        country = post_data.get('country'),
        cursor = mysql.connection.cursor()
        user = cursor.execute('''SELECT * FROM `login` where username=%s''',(username))
        if( not user):
            cursor.execute(''' INSERT INTO login VALUES(%s,%s,%s,%s,%s)''',(username,password,email,phone,country))
            mysql.connection.commit()
            cursor.close()
            response_object['message'] = 'user added!'
            return jsonify(response_object)
        else:
            return f"already exist"

@app.route('/login', methods = ['POST', 'GET'])
def login():
    if request.method == 'POST':
        post_data = request.get_json()
        username = post_data.get('username'),
        password = post_data.get('password'),
        cursor = mysql.connection.cursor()
        cursor.execute('SELECT * FROM login WHERE username = %s AND password = %s', (username, password,))
        account = cursor.fetchone()
        if account:
            # Create session data, we can access this data in other routes
            session['loggedin'] = True
            session['id'] = 1
            session['username'] = username
            # Redirect to home page
            return f'Logged'
            # return session
        else:
            # Account doesnt exist or username/password incorrect
            return f'Incorrect username/password!'

@app.route('/forgotpassword', methods = ['POST', 'GET'])
def forgotpass():
    # response_object = {'status': 'success'}
    if request.method == 'POST':
        post_data = request.get_json()
        email = post_data.get('email'),
        password = post_data.get('password1'),
        cursor = mysql.connection.cursor()
        user = cursor.execute('''SELECT * FROM `login` where email=%s''',(email))
        if(user):
            cursor.execute(''' UPDATE login SET password=%s WHERE email=%s''',(password,email))
            mysql.connection.commit()
            cursor.close()
            # response_object['message'] = 'changed..!'
            return f'changed..!'
        else:
            return f'incorrect'

if __name__ == '__main__':
        app.run()
