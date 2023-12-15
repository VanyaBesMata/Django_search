from django.db import models


class Search(models.Model):
    name = models.CharField(max_length=100, verbose_name="Name")
    female = models.CharField(max_length=100, verbose_name="Female")
    age = models.IntegerField(verbose_name='Age')
    registration = models.DateTimeField(verbose_name='Start registration')
