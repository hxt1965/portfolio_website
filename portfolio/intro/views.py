from django.shortcuts import render
from .models import Theme

# Create your views here.
def intro(request):
    themes = Theme.objects.all()

    context = {
        'themes': themes
    }

    return render(request, 'intro.html', context = context)