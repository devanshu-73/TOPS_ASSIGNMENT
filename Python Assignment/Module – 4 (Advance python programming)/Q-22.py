# How to Define a Class in Python? What Is Self? Give An Example Of A Python Class.

# Car is a class with attribute model
# details is a method that prints info about car. 
# self is a reference to object of class, allowing access to its attributes and methods.

class Car:
    def details(self,model):
        self.model = model
        print(f"{self.model}")

car = Car()
car.details("Swift")






