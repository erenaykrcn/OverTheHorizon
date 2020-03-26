from django.shortcuts import render

from rest_framework import generics, permissions, pagination
from rest_framework.response import Response

from .models import Destination
from .permissions import IsOwnerOrReadOnly
from .serializers import DestinationSerializer


def seedest(request):
	return render(request, 'index.html')


class DestPageNumberPagination(pagination.PageNumberPagination):
    page_size = 5
    page_size_query_param = 'size'
    max_page_size = 20



    def get_paginated_response(self, data):
        author = False
        user = self.request.user

        if user.is_authenticated:
            author = True

        context = {
            'next': self.get_next_link(),
            'previous': self.get_previous_link(),
            'count': self.page.paginator.count,
            'author': author,
            'results': data,
		}

        return Response(context)



class DestDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset            = Destination.objects.all()
    serializer_class    = DestinationSerializer
    lookup_field        = 'slug'
    permission_classes  = [IsOwnerOrReadOnly]




class DestListCreateAPIView(generics.ListCreateAPIView):
    queryset            = Destination.objects.all()
    serializer_class    = DestinationSerializer
    permission_classes  = [permissions.IsAuthenticatedOrReadOnly]
    pagination_class    = DestPageNumberPagination


    def perform_create(self, serializer):
        serializer.save()
