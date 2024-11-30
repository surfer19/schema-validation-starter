from enum import Enum
from pydantic import BaseModel

class DogSize(str, Enum):
    SMALL = "small"
    MEDIUM = "medium"
    LARGE = "large"

class LifeExpectancy(BaseModel):
    min: int
    max: int
    
    class Config:
        json_schema_extra = {"title": "lifeExpectancy"}

class DogBreed(BaseModel):
    id: int
    name: str
    size: DogSize
    temperament: list[str]
    lifeExpectancy: LifeExpectancy
    imageUrl: str
    
    class Config:
        json_schema_extra = {"title": "dogBreed"}
        from_attributes = True

class DogBreedsResponse(BaseModel):
    breeds: list[DogBreed]
    
    class Config:
        json_schema_extra = {"title": "dogBreedsResponse"}