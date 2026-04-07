from django.conf import settings
from django.core.mail import send_mail
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView


@method_decorator(csrf_exempt, name='dispatch')
class ContactAPIView(APIView):
    authentication_classes = []
    permission_classes = []

    def post(self, request):
        name = (request.data.get('name') or '').strip()
        email = (request.data.get('email') or '').strip()
        subject = (request.data.get('subject') or '').strip()
        message = (request.data.get('message') or '').strip()

        if not name or not email or not subject or not message:
            return Response(
                {'detail': 'Tous les champs sont obligatoires.'},
                status=status.HTTP_400_BAD_REQUEST,
            )

        if len(message) < 20:
            return Response(
                {'detail': 'Le message doit contenir au moins 20 caractères.'},
                status=status.HTTP_400_BAD_REQUEST,
            )

        email_subject = f"[Portfolio] {subject}"
        email_body = (
            f"Nom: {name}\n"
            f"Email: {email}\n\n"
            f"Message:\n{message}"
        )

        send_mail(
            subject=email_subject,
            message=email_body,
            from_email=settings.DEFAULT_FROM_EMAIL,
            recipient_list=[settings.CONTACT_RECEIVER_EMAIL],
            fail_silently=False,
        )

        return Response({'detail': 'Message envoyé.'}, status=status.HTTP_201_CREATED)
