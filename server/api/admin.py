# myapp/admin.py
from django.contrib import admin
from django.utils.translation import gettext_lazy as _
from .models import Report


@admin.register(Report)
class ReportAdmin(admin.ModelAdmin):
    list_display = ('title', 'sector', 'topic', 'intensity', 'relevance', 'likelihood', 'end_year', 'region', 'pestle', 'source', 'country')
    search_fields = ('title', 'sector', 'topic', 'region', 'source', 'country')
    list_filter = (
        'end_year',
        'sector',
        'topic',
        'region',
        'pestle',
        'source',
        'country',
    )
