import PyPDF2
from docx import Document
import json


def objToText(obj):
    ext = obj.name.split(".")[-1]
    
    if ext == "pdf":
        print("PDF")
        pdf_reader = PyPDF2.PdfReader(obj)
        text = ''
        for page_num in range(len(pdf_reader.pages)):
            page = pdf_reader.pages[page_num]
            text += page.extract_text()

    elif ext == ("txt"):
        print("text")
        text = obj.read().decode('utf-8')
        
    elif ext == ("docx"):
        print("docx")
        text = ''
        doc = Document(obj)
        for paragraph in doc.paragraphs:
            text += paragraph.text + '\n'  # Append each paragraph's text to the 'text' string
    else :
        return ("Unsupported Format. please upload in pdf,txt,docs.")
    

    # creating the prompt now.
    prompt = f'''My Resume text is given below.  Resume text - `{text}`. Parse the provided resume text and organize the information into a dictionary format.

Personal Details:

Name
Title
Email
Phone
Location
Interests and Currently Learning:

Skills:

Education:

Degree
Institution
Duration
Grade

Work Experience:

Position
Company
Duration

Certificates:
Course
Duration
Certifying Authority

Languages:


Profile:

[List of job titles from work experience]

Output Format:

A dictionary containing the parsed information as described above.
 '''

    parsed_dict=prompt_ai(prompt)
    print(type(parsed_dict))
    return parsed_dict




def prompt_ai(resume_prompt):
    import requests

    url = "https://open-ai21.p.rapidapi.com/conversationgpt35"

    payload = {
        "messages": [
            {
                "role": "user",
                "content": resume_prompt
            }
        ],
        "web_access": False,
        "system_prompt": "",
        "temperature": 0.7,
        "top_k": 5,
        "top_p": 0.9,
        "max_tokens": 256
    }
    headers = {
        "content-type": "application/json",
        "X-RapidAPI-Key": "5f942143c0msha5a47c7ae62a5e6p1311efjsnf161a7cdbeee",
        "X-RapidAPI-Host": "open-ai21.p.rapidapi.com"
    }

    response = requests.post(url, json=payload, headers=headers)
    print(response)
    print (response.json())
    parsed_response=response.json()
    print('xxxxxxxx')
    print(parsed_response['result'])
    print('yyyyyy')

    return parsed_response['result']
    

  

    
