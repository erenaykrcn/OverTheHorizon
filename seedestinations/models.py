from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()


class Destination(models.Model):
    user = User.objects.get(id=1)
    name = models.CharField(max_length=100, null = True)

    background = models.URLField(null=True, blank=True, default="https://s3-eu-central-1.amazonaws.com/othorizon/seedestinations/eg/bg.jpg")

    box1 = models.URLField(null=True, blank=True, default="https://s3-eu-central-1.amazonaws.com/othorizon/seedestinations/eg/box1.png")
    box2 = models.URLField(null=True, blank=True, default="https://s3-eu-central-1.amazonaws.com/othorizon/seedestinations/eg/box2.png")

    highs1 = models.URLField(null=True, blank=True, default="https://s3-eu-central-1.amazonaws.com/othorizon/seedestinations/eg/highs1.png")
    highs2 = models.URLField(null=True, blank=True, default="https://s3-eu-central-1.amazonaws.com/othorizon/seedestinations/eg/highs2.png")
    highs3 = models.URLField(null=True, blank=True, default="https://s3-eu-central-1.amazonaws.com/othorizon/seedestinations/eg/highs3.png")
    highs4 = models.URLField(null=True, blank=True, default="https://s3-eu-central-1.amazonaws.com/othorizon/seedestinations/eg/highs4.png")

    nav1 = models.URLField(null=True, blank=True , default="https://s3-eu-central-1.amazonaws.com/othorizon/seedestinations/eg/nav1.jpg")
    nav2 = models.URLField(null=True, blank=True , default="https://s3-eu-central-1.amazonaws.com/othorizon/seedestinations/eg/nav2.jpg")
    nav3 = models.URLField(null=True, blank=True , default="https://s3-eu-central-1.amazonaws.com/othorizon/seedestinations/eg/nav3.jpg")
    nav4 = models.URLField(null=True, blank=True , default="https://s3-eu-central-1.amazonaws.com/othorizon/seedestinations/eg/nav4.jpg")

    slug = models.SlugField(null=True, blank=True)

    desc1 = models.TextField(max_length=10000, null=True)
    desc2 = models.TextField(max_length=10000, null=True)

    highs_head1 = models.CharField(max_length=100, null=True)
    highs_head2 = models.CharField(max_length=100, null=True)
    highs_head3 = models.CharField(max_length=100, null=True)
    highs_head4 = models.CharField(max_length=100, null=True)

    highs_desc1 = models.TextField(max_length=10000, null=True)
    highs_desc2 = models.TextField(max_length=10000, null=True)    
    highs_desc3 = models.TextField(max_length=10000, null=True)    
    highs_desc4 = models.TextField(max_length=10000, null=True)

    fact1 = models.CharField(null=True, blank=True, max_length=10000)   
    fact2 = models.CharField(null=True, blank=True, max_length=10000)   
    fact3 = models.CharField(null=True, blank=True, max_length=10000)   
    fact4 = models.CharField(null=True, blank=True, max_length=10000)   
    fact5 = models.CharField(null=True, blank=True, max_length=10000)   
    fact6 = models.CharField(null=True, blank=True, max_length=10000)  
    fact7 = models.CharField(null=True, blank=True, max_length=10000)  

    head =  models.CharField(null=True, blank=True, max_length=10000) 

