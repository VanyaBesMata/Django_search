from django.shortcuts import render
from django.views.generic import ListView
from .models import Search
from django.http import JsonResponse
from django.db.models import Q


class SearchView(ListView):
    model = Search
    template_name = 'search.html'


def search_view(request):
    if request.method == "POST":
        query = request.POST['query']
        items = Search.objects.filter(
            Q(name__icontains=query) |
            Q(female__icontains=query) |
            Q(age__icontains=query) |
            Q(registration__icontains=query)
        )
        results = [{'name': item.name, 'female': item.female,
                    'age': item.age, 'registration': item.registration} for
                   item in items]
        return JsonResponse({'results': results})
    else:
        return JsonResponse({'results': []})
