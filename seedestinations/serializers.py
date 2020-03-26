from django.contrib.auth import get_user_model, authenticate, login, logout
from django.db.models import Q
from django.urls import reverse
from django.utils import timezone

from rest_framework import serializers
from .models import Destination


User = get_user_model()



class UserPublicSerializer(serializers.ModelSerializer):

    username = serializers.CharField(required=False, allow_blank=True, read_only=True)

    class Meta:
        model = User
        fields = [
            'username',
            ]

    



class DestinationSerializer(serializers.ModelSerializer):

    user = UserPublicSerializer(read_only=True)


    class Meta:

        model = Destination

        fields = [
            'slug',
            'user',

            'name',
            
            'background',
            'box1',
            'box2',
            'highs1', 
            'highs2',
            'highs3',
            'highs4',

            'nav1', 
            'nav2',
            'nav3', 
            'nav4',         

            'desc1',
            'desc2',

            'highs_desc1',   
            'highs_desc2',   
            'highs_desc3',   
            'highs_desc4', 


            'highs_head1',   
            'highs_head2',   
            'highs_head3',   
            'highs_head4',

            'fact1', 
            'fact2', 
            'fact3', 
            'fact4', 
            'fact5', 
            'fact6', 
            'fact7',     

            'head',             

        ]

    def get_owner(self, obj):

        request = self.context['request']

        if request.user.is_authenticated:

            if obj.user == request.user:

                return True

        return False

