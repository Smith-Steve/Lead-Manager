from leads.models import Lead
from rest_framework import viewsets, permissions
from .serializers import LeadSerializer

# Lead Viewset.
# It allows us to create a full crud API without having to specify explicit methods for each operation.
# This allows us to create a full API. Without specifying explicit methods.

class LeadViewSet(viewsets.ModelViewSet):
    # queryset = User.objects.all()
    queryset = Lead.objects.all() # Doesn't appear that Lead, or its parents, have an 'objects' method. Got lost here.
    permission_classes_classes = [permissions.AllowAny]
    serializer_class = LeadSerializer