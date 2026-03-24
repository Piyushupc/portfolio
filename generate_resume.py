from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.pdfgen import canvas

output = "resume.pdf"

c = canvas.Canvas(output, pagesize=A4)
width, height = A4

left_margin = 20 * mm
y = height - 20 * mm

# Header
c.setFont('Helvetica-Bold', 20)
c.drawString(left_margin, y, 'Piyush Kumar Rai')

c.setFont('Helvetica', 10)
y -= 8 * mm
c.drawString(left_margin, y, 'piyushrai2566@gmail.com | +91 91236 76497 | Noida, India')

# Separator
y -= 6 * mm
c.setLineWidth(0.5)
c.line(left_margin, y, width - left_margin, y)

# Career Objective
y -= 10 * mm
c.setFont('Helvetica-Bold', 12)
c.drawString(left_margin, y, 'CAREER OBJECTIVE')

c.setFont('Helvetica', 10)
y -= 6 * mm
text = c.beginText(left_margin, y)
text.setLeading(12)
text.textLines('Aspiring AI/ML Engineer with strong programming, problem-solving, and machine learning skills, aiming to build intelligent systems and scalable applications. Fresher open to internships and entry-level roles.')

c.drawText(text)

# Education
y = text.getY() - 8 * mm
c.setFont('Helvetica-Bold', 12)
c.drawString(left_margin, y, 'EDUCATION')

c.setFont('Helvetica', 10)
y -= 6 * mm
c.drawString(left_margin, y, "Master's Degree in Computer Applications, Dr. A.P.J. Abdul Kalam Technical University — 09/2024 – Present | Noida, UP")

y -= 6 * mm
c.drawString(left_margin, y, "Bachelor's Degree in Computer Applications, Mahatma Gandhi Kashi Vidyapeeth — 11/2020 – 09/2023 | Varanasi, UP")

# Internship / Training
y -= 10 * mm
c.setFont('Helvetica-Bold', 12)
c.drawString(left_margin, y, 'INTERNSHIP / TRAINING')

c.setFont('Helvetica', 10)
y -= 6 * mm
c.drawString(left_margin, y, 'Data Analyst Trainee, Accenture — 06/2023 – 12/2023 | Remote')

y -= 5 * mm
c.drawString(left_margin, y, 'Web Development Intern, Octanet — 02/2023 – 04/2023 | Remote')

# Technical Skills
y -= 10 * mm
c.setFont('Helvetica-Bold', 12)
c.drawString(left_margin, y, 'TECHNICAL SKILLS')

c.setFont('Helvetica', 10)
y -= 6 * mm
skills = ['Python', 'SQL', 'NumPy', 'Pandas', 'Matplotlib', 'Seaborn', 'Scikit-learn', 'Flask']
c.drawString(left_margin, y, ', '.join(skills))

# Projects
y -= 10 * mm
c.setFont('Helvetica-Bold', 12)
c.drawString(left_margin, y, 'PROJECTS')

c.setFont('Helvetica', 10)
y -= 6 * mm
c.drawString(left_margin, y, 'Real-Time Stampede Detection System — AI/CV system to detect dangerous crowd density and raise alerts.')

y -= 5 * mm
c.drawString(left_margin, y, 'Voice-Activated Personal Assistant — Built with SpeechRecognition, pyttsx3, OpenAI API for NLP automation.')

# Certifications
y -= 10 * mm
c.setFont('Helvetica-Bold', 12)
c.drawString(left_margin, y, 'CERTIFICATIONS')

c.setFont('Helvetica', 10)
y -= 6 * mm
c.drawString(left_margin, y, 'AI-ML (Python Programming) — E & ICT Academy, IIT Kanpur')

y -= 5 * mm
c.drawString(left_margin, y, 'Introduction to Python — Kaggle')

y -= 5 * mm
c.drawString(left_margin, y, 'Data Structure Algorithms — VIJESHA IT Services LLP')

# Footer
c.showPage()
c.save()
print('Generated', output)
