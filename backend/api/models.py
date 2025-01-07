from django.db import models


class Card(models.Model):
    id = models.CharField(max_length=255, primary_key=True)
    name = models.CharField(max_length=255)
    supertype = models.CharField(max_length=255)
    subtypes = models.JSONField(blank=True, null=True)
    types = models.JSONField(blank=True, null=True)
    set = models.ForeignKey('Set', on_delete=models.CASCADE)
    number = models.CharField(max_length=50)
    rarity = models.CharField(max_length=100, blank=True, null=True)

    def __str__(self):
        return self.name


class Image(models.Model):
    id = models.BigAutoField(primary_key=True)
    card = models.ForeignKey(Card, on_delete=models.CASCADE)
    url = models.URLField(max_length=500)
    type = models.CharField(max_length=50)

    def __str__(self):
        return self.url


class Market(models.Model):
    id = models.BigAutoField(primary_key=True)
    card = models.ForeignKey(Card, on_delete=models.CASCADE)
    url = models.URLField(max_length=500)
    updated_at = models.DateField()
    market = models.CharField(max_length=100)

    def __str__(self):
        return f"{self.market} - {self.url}"


class Set(models.Model):
    id = models.CharField(max_length=255, primary_key=True)
    name = models.CharField(max_length=255)
    series = models.CharField(max_length=255)
    printed_total = models.IntegerField(blank=True, null=True)
    total = models.IntegerField(blank=True, null=True)
    ptcgo_code = models.CharField(max_length=100, blank=True, null=True)
    release_date = models.DateField(blank=True, null=True)
    updated_at = models.DateTimeField(blank=True, null=True)
    symbol_url = models.URLField(max_length=500, blank=True, null=True)
    logo_url = models.URLField(max_length=500, blank=True, null=True)

    def __str__(self):
        return self.name
