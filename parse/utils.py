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
    prompt = f'''My Resume text is given below.  Resume text - `{text}`. Parse the provided resume text and give me the response in the format as mentioned next.
        {{
  "Personal Information": {{
    "Name": "", // Full name of the individual
    "Email": "", // Email address
    "Phone": "", // Phone number
    "Location": "" // Location where the individual is based
  }},
  "Skills": {{
    "Programming Languages": [], // List of programming languages known
    "Web Technologies": [], // List of web technologies known
    "Database": [], // List of databases known
    "Frameworks": [], // List of frameworks known
    "Other Skills": [] // Other relevant skills
  }},
  "Projects": [
    {{
      "Name": "", // Name of the project
      "Description": "", // Description of the project
      "Technologies Used": [], // Technologies used in the project
      "Duration": "" // Duration of the project
    }}
  ],
  "Work Experience": [
    {{
      "Position": "", // Position held
      "Company": "", // Company worked at
      "Description": "", // Description of responsibilities
      "Duration": "" // Duration of the employment
    }}
  ]
}}

Output format -  Don't include any extra text other then the mentionded format in the response.
'''


    # parsed_dict=prompt_ai(prompt)
    # print(type(parsed_dict))
    # parsed_dict=json.loads(parsed_dict)
    # print(type(parsed_dict))
    # return parsed_dict
#     test_response= ''' {
#   "Personal Information": {
#     "Name": "John Doe",
#     "Email": "john.doe@example.com",
#     "Phone": "123-456-7890",
#     "Location": "City, Country"
#   },
#   "Skills": {
#     "Programming Languages": ["JavaScript", "Python", "Java"],
#     "Web Technologies": ["HTML", "CSS", "React", "Node.js"],
#     "Database": ["SQL", "MongoDB"],
#     "Frameworks": ["Express.js", "Django"],
#     "Other Skills": ["Git", "RESTful APIs"]
#   },
#   "Projects": [
#     {
#       "Name": "E-commerce Website",
#       "Description": "Developed a fully functional e-commerce website using MERN stack.",
#       "Technologies Used": ["MongoDB", "Express.js", "React", "Node.js"],
#       "Duration": "June 2021 - August 2021"
#     },
#     {
#       "Name": "Personal Blog",
#       "Description": "Designed and implemented a personal blog using HTML, CSS, and JavaScript.",
#       "Technologies Used": ["HTML", "CSS", "JavaScript"],
#       "Duration": "January 2021 - February 2021"
#     }
#   ],
#   "Work Experience": [
#     {
#       "Position": "Software Developer Intern",
#       "Company": "Tech Company XYZ",
#       "Description": "Worked on developing new features and debugging existing issues in a web application.",
#       "Duration": "May 2021 - August 2021"
#     },
#     {
#       "Position": "Frontend Developer",
#       "Company": "Startup ABC",
#       "Description": "Responsible for designing and developing user interfaces for web applications.",
#       "Duration": "January 2020 - April 2021"
#     }
#   ]
# }

#  '''
    test_response = '''
{
  "Personal Information": {
    "Name": "Arshit Jasuja",
    "Email": "arshit0208.cse19@chitkara.edu.in",
    "Phone": "9815800337",
    "Location": "Chandigarh, India"
  },
  "Interests": ["Web Development", "Programming (especially in JAVA)"],
  "Currently Learning": ["Data Structures", "Node.js", "jQuery"],
  "Skills": {
    "Programming Languages": ["JavaScript", "C", "Java", "C++"],
    "Web Technologies": ["HTML", "CSS", "Bootstrap", "React"],
    "Other Skills": ["OS", "DBMS"]
  },
  "Education": [
    {
      "Degree": "Bachelors of Engineering",
      "Institution": "Chitkara University Institute of Engineering and Technology, Punjab",
      "Duration": "07/2019 - Present",
      "Courses": ["JavaScript", "C", "React", "OS", "DBMS", "CSS", "HTML", "Bootstrap"]
    },
    {
      "Degree": "10+2",
      "Institution": "St.Anne's Convent School, Chandigarh",
      "Percentage/Grade": "86%",
      "Duration": "04/2016 - 03/2017",
      "Courses": ["C++"]
    },
    {
      "Degree": "10th",
      "Institution": "St.Anne's Convent School, Chandigarh",
      "Percentage/Grade": "9.77",
      "Duration": "04/2018 - 03/2019",
      "Courses": ["Computer Science and Engineering"]
    }
  ],
  "Certificates": [
    {
      "Name": "Introduction To Web Development",
      "Duration": "03/2020 - 04/2020",
      "Issuer": "University of California, Davis"
    },
    {
      "Name": "Introduction To UI Design",
      "Duration": "09/2020 - 10/2020",
      "Issuer": "University of Minnesota"
    }
  ],
  "Work Experience": [
    {
      "Position": "Ninja Entrepreneur",
      "Company": "Coding Ninjas, India",
      "Duration": "11/2020 - Present"
    }
  ],
  "Languages": {
    "English": "Full Professional Proficiency",
    "Hindi": "Native or Bilingual Proficiency",
    "Punjabi": "Full Professional Proficiency"
  },
  "Memberships": [
    {
      "Organization": "ISTE Society, Chitkara University",
      "Duration": "09/2021 - Present"
    },
    {
      "Organization": "ACM Club, Chitkara University",
      "Duration": "08/2020 - Present"
    }
  ]
}'''
    print("response from api")
    print(test_response)
    return json.loads(test_response)





def prompt_ai(resume_prompt):
    import requests
    import random


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
        "max_tokens": 256,
        "chat_id":random.randint(1000, 9999)
    }
    headers = {
        "content-type": "application/json",
        "X-RapidAPI-Key": "76eed23115mshd46f1a05cb56a5fp16e62cjsn2528410facaf",
        "X-RapidAPI-Host": "open-ai21.p.rapidapi.com"
    }

    response = requests.post(url, json=payload, headers=headers)
    
    parsed_response=response.json()
    final_response=parsed_response['result']
    final_response=final_response.replace('json', '')
    print('xxxxxxxx')
    print(final_response)
    print('yyyyyy')

    return json.loads(final_response)
    

  

    
