from django.db import models
import os 

def get_image_path(instance, filename):
    return os.path.join('img', str(instance.theme_id), filename)

# Create your models here.
class Theme(models.Model):
    theme_id = models.IntegerField(default=1)
    theme = models.CharField(max_length = 20)
    img = models.ImageField(upload_to = get_image_path, blank = True, null=True)
    url = models.TextField()

    class Meta:
        ordering = ['theme_id']
    
    def __str__(self):
        return self.theme

    def get_absolute_url(self):
        return reversed('theme', args=[str(self.theme_id)])

    #def get_absolute_url(self):
    #    return reverse('model-detail-view', args=[str(self.theme_id)])
