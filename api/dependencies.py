from typing import Protocol, List
from models import DogBreed

class DogBreedsRepository(Protocol):
    async def get_all_breeds(self) -> List[DogBreed]:
        ...

class InMemoryDogBreedsRepository:
    async def get_all_breeds(self) -> List[DogBreed]:
        return [
            DogBreed(
                id=1,
                name="Labrador Retriever",
                size="large",
                temperament=["Friendly", "Active", "Outgoing"],
                lifeExpectancy={"min": 10, "max": 12},
                imageUrl="https://upload.wikimedia.org/wikipedia/commons/b/bd/Golden_Retriever_Dukedestiny01_drvd.jpg"
            ),
            DogBreed(
                id=2,
                name="French Bulldog",
                size="small",
                temperament=["Playful", "Adaptable", "Smart"],
                lifeExpectancy={"min": 10, "max": 12},
                imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/2008-07-28_Dog_at_Frolick_Field.jpg/1280px-2008-07-28_Dog_at_Frolick_Field.jpg"
            ),
            DogBreed(
                id=3,
                name="German Shepherd",
                size="large",
                temperament=["Loyal", "Intelligent", "Confident"],
                lifeExpectancy={"min": 9, "max": 13},
                imageUrl="https://upload.wikimedia.org/wikipedia/commons/d/d0/German_Shepherd_-_DSC_0346_%2810096362833%29.jpg"
            ),
            DogBreed(
                id=4,
                name="Siberian Husky",
                size="medium",
                temperament=["Friendly", "Energetic", "Independent"],
                lifeExpectancy={"min": 12, "max": 14},
                imageUrl="https://upload.wikimedia.org/wikipedia/commons/a/a3/Black-Magic-Big-Boy.jpg"
            ),
            DogBreed(
                id=5,
                name="Corgi",
                size="small",
                temperament=["Affectionate", "Smart", "Alert"],
                lifeExpectancy={"min": 12, "max": 13},
                imageUrl="https://upload.wikimedia.org/wikipedia/commons/f/fb/Welchcorgipembroke.JPG"
            ),
            DogBreed(
                id=6,
                name="Poodle",
                size="medium",
                temperament=["Intelligent", "Active", "Proud"],
                lifeExpectancy={"min": 10, "max": 18},
                imageUrl="https://upload.wikimedia.org/wikipedia/commons/f/f8/Full_attention_%288067543690%29.jpg"
            ),
            DogBreed(
                id=7,
                name="Rottweiler",
                size="large",
                temperament=["Loyal", "Confident", "Protective"],
                lifeExpectancy={"min": 8, "max": 10},
                imageUrl="https://upload.wikimedia.org/wikipedia/commons/2/26/Rottweiler_standing_facing_left.jpg"
            ),
            DogBreed(
                id=8,
                name="Beagle",
                size="small",
                temperament=["Friendly", "Curious", "Merry"],
                lifeExpectancy={"min": 12, "max": 15},
                imageUrl="https://upload.wikimedia.org/wikipedia/commons/5/55/Beagle_600.jpg"
            ),
            DogBreed(
                id=9,
                name="Dachshund",
                size="small",
                temperament=["Clever", "Stubborn", "Devoted"],
                lifeExpectancy={"min": 12, "max": 16},
                imageUrl="https://upload.wikimedia.org/wikipedia/commons/2/27/Short-haired-Dachshund.jpg"
            )
        ] 