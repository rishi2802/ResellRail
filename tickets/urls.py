from django.urls import path
from . import views
urlpatterns = [path("",views.home,name='home'),
               path("check",views.check,name='check'),
               path("new",views.new,name='new'),
               path("log",views.log,name='log'),
               path("sign",views.sign,name="sign"),
               path("sell",views.sell,name="sell"),
               path("back",views.back,name="back"),
               path("logout",views.logout,name='logout')]