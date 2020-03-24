from django.shortcuts import render


def seedest(request):
	return render(request, 'index.html')
