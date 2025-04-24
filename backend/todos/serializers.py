from rest_framework import serializers  # type: ignore

from .models import Todo

class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todo
        fields = ('tittle', 'body', 'create_date')