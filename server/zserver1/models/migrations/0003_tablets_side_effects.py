# Generated by Django 3.2 on 2022-10-09 17:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('models', '0002_auto_20221009_2156'),
    ]

    operations = [
        migrations.AddField(
            model_name='tablets',
            name='side_effects',
            field=models.TextField(default=1),
            preserve_default=False,
        ),
    ]