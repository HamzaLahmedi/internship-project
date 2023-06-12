import 'package:flutter/material.dart';
import 'package:frontend/Pages/home_screen.dart';
import 'package:frontend/Pages/first_view_screen.dart';
import 'package:frontend/Pages/login.dart';
import 'package:frontend/Pages/welcome_screen.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'flutter',
      theme: ThemeData(useMaterial3: true, ),
      home: const LogIn(),
    );
  }
}
