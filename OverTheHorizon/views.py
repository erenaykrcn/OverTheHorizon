from django.http import HttpResponse
from django.shortcuts import render


def baseview(request):
	return render(request, 'index.html', context={})