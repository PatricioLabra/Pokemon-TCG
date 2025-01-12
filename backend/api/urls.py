from django.urls import path
from .views import SetListView, SetCardsView, CardDetailView
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

# Configuración para Swagger UI
schema_view = get_schema_view(
   openapi.Info(
      title="API Pokemon-TCG Docs",
      default_version='v1',
      description="Documentation Swagger",
      contact=openapi.Contact(email="patricio.labra821@gmail.com"),
      license=openapi.License(name="BSD License"),
   ),
   public=True,
)

urlpatterns = [
    # Rutas de la API
    path('sets/', SetListView.as_view(), name='set-list'),
    path('sets/<str:id>/cards/', SetCardsView.as_view(), name='set-cards'),
    path('cards/<str:id>/', CardDetailView.as_view(), name='card-detail'),

    # Ruta para acceder a la documentación Swagger UI
    path('docs/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
]
