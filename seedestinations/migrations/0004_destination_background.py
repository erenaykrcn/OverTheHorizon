# Generated by Django 2.0.6 on 2020-03-26 09:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('seedestinations', '0003_auto_20200326_1245'),
    ]

    operations = [
        migrations.AddField(
            model_name='destination',
            name='background',
            field=models.ImageField(blank=True, null=True, upload_to=''),
        ),
    ]