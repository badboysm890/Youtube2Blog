# Youtube2Blog

Transform your YouTube content into engaging blog posts effortlessly with our AI-powered Youtube to Blog conversion tool. Optimize your reach and unlock the potential of SEO for your videos. Get started now! 🚀 #AI #SEO #YouTube2Blog"

### Features ⭐️

- Convert any Youtube or Drive Videos 📹
- Has Suggestions over images 🌠
- Provides a Medium Blog Like editor 📝

## If you like it Please Gimme some stars ⭐️ so i can have some motive to do more !! 🥺

Here is how you can do it !

### Step 1 - Enter the Youtube URL

![Steps](https://github.com/badboysm890/Youtube2Blog/raw/main/assets/steps.png "Steps")

### Step 2 - Edit the content that apears in the Editor

![Steps](https://github.com/badboysm890/Youtube2Blog/raw/main/assets/steps2.png "Steps")

### Step 3 - Click on any Image You want to use and Finally Copy and Paste it in Medium or Any Blog app

![Steps](https://github.com/badboysm890/Youtube2Blog/raw/main/assets/savedImages.png "Steps")

## Installation

1. Clone this repository:

   ```
   git clone https://github.com/badboysm890/Youtube2Blog.git
   ```

2. Navigate to the project directory:

   ```
   cd Youtube2Blog
   ```

3. Install the required packages:

   ```
   pip install -r requirements.txt
   ```

## Project Structure

The project consists of the following files:

1. `main.py` - This has the base code for the Youtube Download to Conversion.
2. `restAPI.py.py` - This is the FASTAPI server which takes care of the web interface.
3. `/WebUI` - This will be Web UI files use any web server you want preferably live server vscode.

## Usage

Step 1

Once every thing has been installed, you have two more prerequisites those are FFMPEG and Youtube-dl

```
pip install --upgrade youtube-dl
```

For Mac
```
brew install ffmpeg
```

For Linux
```
sudo apt install ffmpeg
```

For example converting a youtube to blog:
```
python3 main.py --params https://youtu.be/SJeBRW1QQMA --name Test.txt
```


Step 2


## Contributing

We welcome contributions to this project. Please follow these guidelines:

1. Create a fork of the repository.
2. Create a new branch with a descriptive name.
3. Commit your changes to your branch.
4. Create a pull request, explaining your changes and the motivation behind them.

## License

Nothing Like that Just Have Fun

## Todo

- Add Automation to have sceduled post to medium
- Use Stable Diffusion to Blog and add more related images
- Make it more fast and accurate paragraphs
