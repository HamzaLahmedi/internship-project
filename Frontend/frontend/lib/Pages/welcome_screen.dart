import 'package:flutter/material.dart';
import 'package:frontend/Pages/home_screen.dart';
import 'package:introduction_screen/introduction_screen.dart';

class WelcomeScreen extends StatefulWidget {
  const WelcomeScreen({Key? key}) : super(key: key);

  @override
  _WelcomeScreenState createState() => _WelcomeScreenState();
}

class _WelcomeScreenState extends State<WelcomeScreen> {
  final introKey = GlobalKey<IntroductionScreenState>();

  void _onIntroEnd() {
    // Navigation logic after done button is pressed
    // For example, you can navigate to the next screen
    Navigator.of(context).pushReplacement(
      MaterialPageRoute(builder: (_) => const NextScreen()),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Center(
          child: Text(
            'MZEYA',
            style: TextStyle(color: Color(0xFF515051)),
          ),
        ),
      ),
      body: Padding(
        padding: const EdgeInsets.fromLTRB(0, 0, 0, 0),
        child: IntroductionScreen(
          key: introKey,
          globalBackgroundColor:
              Colors.white, // Set the background color to #515051
          done: const Text(
            'Done',
            style: TextStyle(
              color: Color(0xFF515051),
              fontWeight: FontWeight.w600,
            ),
          ),
          onDone:
              _onIntroEnd, // Call _onIntroEnd when the done button is pressed
          pages: getPages(),
          showNextButton: true, // Set to true to show the next button
          next: const Text(
            'Next',
            style: TextStyle(
              color: Color(0xFF515051),
              fontWeight: FontWeight.w600,
            ),
          ),

          dotsDecorator: DotsDecorator(
            size: const Size.square(10.0),
            activeSize: const Size(20.0, 10.0),
            activeShape: RoundedRectangleBorder(
              borderRadius: BorderRadius.circular(25.0),
            ),
            activeColor:
                const Color(0xFF515051), // Customize the active dot color
          ),
        ),
      ),
    );
  }

  List<PageViewModel> getPages() {
    return [
      PageViewModel(
        image: Image.asset('assets/images/page_1.png'),
        titleWidget: const Text(
          'Submit Proposals and find jobs.',
          style: TextStyle(
            color: Color(0xFF515051),
          ),
        ),
        bodyWidget: const Center(
          child: Text(
            'Post your needs and workers \nwill contact you as soon \nas possible',
            style: TextStyle(
              color: Color(0xFF515051),
            ),
          ),
        ),
        footer: Container(
          margin: const EdgeInsets.fromLTRB(0, 70, 0, 0),
          child: ElevatedButton(
            onPressed: () {
              // Handle login button press
            },
            style: ButtonStyle(
              foregroundColor: MaterialStateProperty.all<Color>(Colors.white),
              backgroundColor: MaterialStateProperty.all<Color>(
                const Color(0xFF515051),
              ),
            ),
            child: const Text('Login'),
          ),
        ),
      ),
      PageViewModel(
        image: Image.asset('assets/images/page_2.png'),
        titleWidget: const Text(
          'Submit Proposals and find jobs.',
          style: TextStyle(
            color: Color(0xFF515051),
          ),
        ),
        bodyWidget: const Center(
          child: Text(
            'Post your needs and workers \nwill contact you as soon \nas possible',
            style: TextStyle(
              color: Color(0xFF515051),
            ),
          ),
        ),
        footer: Container(
          margin: const EdgeInsets.fromLTRB(0, 70, 0, 0),
          child: ElevatedButton(
            onPressed: () {
              // Handle login button press
            },
            style: ButtonStyle(
              foregroundColor: MaterialStateProperty.all<Color>(Colors.white),
              backgroundColor: MaterialStateProperty.all<Color>(
                const Color(0xFF515051),
              ),
            ),
            child: const Text('Login'),
          ),
        ),
      ),
      PageViewModel(
        image: Image.asset('assets/images/page_1.png'),
        titleWidget: const Text(
          'Submit Proposals and find jobs.',
          style: TextStyle(
            color: Color(0xFF515051),
          ),
        ),
        bodyWidget: const Center(
          child: Text(
            'Post your needs and workers \nwill contact you as soon \nas possible',
            style: TextStyle(
              color: Color(0xFF515051),
            ),
          ),
        ),
        footer: Container(
          margin: const EdgeInsets.fromLTRB(0, 70, 0, 0),
          child: ElevatedButton(
            onPressed: () {
              // Handle login button press
            },
            style: ButtonStyle(
              foregroundColor: MaterialStateProperty.all<Color>(Colors.white),
              backgroundColor: MaterialStateProperty.all<Color>(
                const Color(0xFF515051),
              ),
            ),
            child: const Text('Login'),
          ),
        ),
      ),
    ];
  }
}

class NextScreen extends StatelessWidget {
  const NextScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return const Scaffold(
      body: Center(
        child: HomeScreen(),
      ),
    );
  }
}
