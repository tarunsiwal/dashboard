# Generated by Django 5.0.7 on 2024-07-30 10:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_alter_report_added_alter_report_published'),
    ]

    operations = [
        migrations.AlterField(
            model_name='report',
            name='added',
            field=models.DateTimeField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='report',
            name='published',
            field=models.DateTimeField(blank=True, null=True),
        ),
    ]