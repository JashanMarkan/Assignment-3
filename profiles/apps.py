from django.apps import AppConfig


class ProfilesConfig(AppConfig):
    def ready(self):
        import profiles.signals
    name = 'profiles'
