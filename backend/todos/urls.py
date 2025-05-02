from django.urls import path
from .views import ListTodo , DetailTodo, CreateTodo, UpdateTodo, DeleteTodo

urlpatterns = [ 
    path('<int:pk>', DetailTodo.as_view(), name = 'todo_detail'),
    path('', ListTodo.as_view(), name = 'todo_list'),
    path('create/', CreateTodo.as_view(), name ='todo_create'),
    path('update/<int:pk>', UpdateTodo.as_view(), name = 'todo_update'),
    path('delete/<int:pk>', DeleteTodo.as_view(), name = 'todo_delete'),
]