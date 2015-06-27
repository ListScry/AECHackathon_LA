# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('endpoints', '0001_initial'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Choice',
            new_name='TagPackage',
        ),
        migrations.RenameField(
            model_name='tagpackage',
            old_name='lat',
            new_name='latitude',
        ),
        migrations.RenameField(
            model_name='tagpackage',
            old_name='long',
            new_name='longitude',
        ),
    ]
