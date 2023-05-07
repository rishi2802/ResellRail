from django.shortcuts import render
from .models import Event
import mysql.connector as mc
# Create your views here.
from django import template

register = template.Library()
con=mc.connect(host="localhost",user="root",password="1234",database="sample")
cur=con.cursor()
em='maya@gmail.com'

def new(request):
    cur.execute("select * from admin")
    v=[]
    v=cur.fetchall()
    i1= request.POST["i1"]
    i2=request.POST["i2"]
    i3= request.POST["i3"]
    i4=request.POST["i4"]
    for i in v:
        if i1==i[2] or i2==i[0]:
            return render(request,'signup.html',{'name':'USER ALREADY EXISTS'})
        elif i3!=i4:
            return render(request,'signup.html',{'name':'PASSWORDS DIFFERENT'})
    query="insert into admin values(%s,%s,%s)"
    val=(i2,i3,i1)
    cur.execute(query,val)
    con.commit()
    return render(request,'addevent.html',{'em':i2,'name':i1})
@register.filter
def get_at_index(list, index):
    return list[index]
def home(request):
    return render(request,'index.html')
def check(request):
    
    
    cur.execute("select * from admin")
    v=[]
    v=cur.fetchall()
    em= request.POST["email"]
    pwd=request.POST["pwd"]
    for i in v:
        if em=="admin@gmail.com" and pwd=="admin123":
            cur.execute("select * from events")
            l=[]
            l=cur.fetchall()
            l2=[]
            for i in l:
                ev = Event()
                ev.url = i[0]
                ev.event=i[1]
                ev.venue=i[2]
                ev.artist=i[3]
                ev.city=i[4]
                ev.date=i[5]
                ev.time = i[6]
                ev.created=i[7]
                ev.status=i[8]
                l2.append(ev)
            return render(request,'logged.html',{'lists':l2})
        elif em==i[0] and pwd==i[1]:
            return render(request,'addevent.html',{'em':em,'name':em[0:4]})
    return render(request,'home.html')

def log(request):
    return render(request,'home.html')
def sign(request):
    return render(request,'signup.html')
def sell(request):
    return render(request,'verify.html')
def back(request):
    return render(request,'addevent.html',{'em':em,'name':em[0:4]})
def logout(request):
    return render(request,'index.html')