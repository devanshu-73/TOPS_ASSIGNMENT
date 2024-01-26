# Explain Inheritance in Python with an example? 
# What is __init__? Or What Is A Constructor In Python?

# Answer : 

# Inheritance in Python allows a class to inherit attributes and methods from another class.
# The __init__ method is a constructor in Python that gets called when an object is created.

class Animal:
    def __init__(self, kutta):
        self.kutta = kutta

class Dog(Animal):
    def sound(self):
        return (f"{self.kutta} karta hai Woof Woof...")

dog = Dog("kutta")
print("base class attibute :",dog.kutta)  # Accessing attribute from base class
print(dog.sound()) 






