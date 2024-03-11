from leads.models import Lead
from django.contrib.auth.models import User
from rest_framework import viewsets, permissions
from .serializers import LeadSerializer

# Lead Viewset.
# This allows us to create a full API. Without specifying explicit methods.

class LeadViewSet(viewsets.ModelViewSet):
    # queryset = User.objects.all()
    queryset = Lead.objects.all()
    permission_classes_classes = [permissions.AllowAny]
    serializer_class = LeadSerializer