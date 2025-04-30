from django.urls import path
from .views import ListTodo , DetailTodo, CreateTodo

urlpatterns = [ 
    path('<int:pk>', DetailTodo.as_view(), name = 'todo_detail'),
    path('', ListTodo.as_view(), name = 'todo_list'),
    path('create/', CreateTodo.as_view(), name='todo_create')
]