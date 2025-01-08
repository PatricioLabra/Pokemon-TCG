from django.db import models
from django.contrib.postgres.fields import ArrayField

class Set(models.Model):
    id = models.TextField(primary_key=True)
    name = models.TextField()
    series = models.TextField()
    printed_total = models.IntegerField(null=True, blank=True)
    total = models.IntegerField(null=True, blank=True)
    ptcgo_code = models.TextField(null=True, blank=True)
    release_date = models.DateField(null=True, blank=True)
    updated_at = models.DateTimeField(null=True, blank=True)
    symbol_url = models.TextField(null=True, blank=True)
    logo_url = models.TextField(null=True, blank=True)

    def __str__(self):
        return self.name
    class Meta:
        managed = False
        db_table = 'set'

class Card(models.Model):
    id = models.TextField(primary_key=True)
    name = models.TextField()
    supertype = models.TextField()
    subtypes = ArrayField(models.TextField(), blank=True)
    types = ArrayField(models.TextField(), blank=True)
    set = models.ForeignKey(Set, on_delete=models.CASCADE, related_name="cards")
    number = models.TextField()
    rarity = models.TextField(null=True, blank=True)
    
    def __str__(self):
        return self.name

    class Meta:
        managed = False
        db_table = 'card'

class Image(models.Model):
    id = models.BigAutoField(primary_key=True)
    card = models.ForeignKey(Card, on_delete=models.CASCADE, related_name='images')
    url = models.TextField()
    type = models.TextField()

    def __str__(self):
        return f"{self.card.id} - {self.type}"
    class Meta:
        managed = False
        db_table = 'image'

class Market(models.Model):
    id = models.BigAutoField(primary_key=True)
    card = models.ForeignKey(Card, on_delete=models.CASCADE, related_name='markets')
    url = models.TextField()
    updated_at = models.DateField()
    market = models.TextField()

    def __str__(self):
        return f"{self.card.id} - {self.market}"
    class Meta:
        managed = False
        db_table = 'market'
