from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from typing import Annotated, Any
from models import DogBreedsResponse
from dependencies import DogBreedsRepository, InMemoryDogBreedsRepository
from fastapi.responses import JSONResponse
from fastapi.openapi.utils import get_openapi

app = FastAPI(
    title="Dog API",
    description="API for retrieving dog breeds information",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

async def get_repository() -> DogBreedsRepository: 
    return InMemoryDogBreedsRepository()

@app.get(
    "/v1/breeds",
    summary="Get all dog breeds",
    description="Returns a list of dog breeds with their characteristics",
    response_model=DogBreedsResponse,
    responses={
        200: {
            "model": DogBreedsResponse,
            "description": "List of dog breeds"
        }
    }
)
async def get_breeds(
    repo: Annotated[DogBreedsRepository, Depends(get_repository)]
) -> DogBreedsResponse:
    try:
        breeds = await repo.get_all_breeds()
        return DogBreedsResponse(breeds=breeds)
    except Exception as e:
        print(f"Error: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))