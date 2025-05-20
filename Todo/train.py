from flask import Flask, request, render_template

app = Flask(__name__,
            template_folder="train",
            static_folder="train"
            )

@app.route('/')
def index():
    return render_template('train.html')

@app.route('/search', methods=['GET'])
def search():

    query = request.args.get('query', '').lower()  # get input and lowercase it
    print("\n\t--->"+query+"<-----\t\n")
    if query == 'indian':
        paragraph = """
        India is a diverse and vibrant country in South Asia known for its rich history, cultural heritage, and varied landscapes. 
        It is the world's largest democracy and has a rapidly growing economy. Indian cuisine, festivals, and traditions attract millions of visitors each year.
        """
        return f"<h3>You searched for: Indian</h3><p>{paragraph}</p>"
    elif query:
        return f"<h3>You searched for: {query}</h3><p>No information available.</p>"
    else:
        return "<h3>No search query provided.</h3>"

if __name__ == '__main__':
    app.run(port=1234, use_reloader=False)
