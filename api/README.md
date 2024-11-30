# Create virtual environment

python3 -m venv venv

# Activate virtual environment (for macOS/Linux)

source venv/bin/activate

# Install requirements

pip3 install -r requirements.txt

# Activate & Run server

source venv/bin/activate && uvicorn main:app --reload
