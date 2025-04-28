from django.db import models
import datetime

class Todo(models.Model):
    title = models.CharField(max_length=150)
    body = models.CharField(max_length=500)
    createDate = models.DateField(auto_now=True)
    completed = models.BooleanField(default=False)
    
    def __str__(self):
        return self.title
