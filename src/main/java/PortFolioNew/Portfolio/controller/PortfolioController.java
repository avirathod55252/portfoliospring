package PortFolioNew.Portfolio.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

@Controller
public class PortfolioController {

    @GetMapping("/")
    public String index(Model model) {

        // Basic Info
        model.addAttribute("name", "Avinash Rathod");
        model.addAttribute("title", "Java Developer");
        model.addAttribute(
                "bio",
                "Frontend-focused developer with strong experience in building responsive, user-friendly web applications using React and modern web technologies. "
                        + "Hands-on experience in government web systems, full-stack development, and real-world project delivery.");

        // ---------------- SOCIAL LINKS ----------------
        Map<String, String> socialLinks = new LinkedHashMap<>();
        socialLinks.put("LinkedIn", "https://www.linkedin.com/in/avinashrathod55252/");
        socialLinks.put("GitHub", "https://github.com/avirathod55252");
        model.addAttribute("socialLinks", socialLinks);

        // ---------------- PROJECTS ----------------
        List<Map<String, String>> projects = new ArrayList<>();

        Map<String, String> project4 = new LinkedHashMap<>();
        project4.put("title", "InsuraSphere – Insurance Management System");
        project4.put(
                "description",
                "Web-based insurance management platform that streamlines policy management, customer onboarding, "
                        + "and claim tracking. Provides separate dashboards for users and administrators with secure data handling.");
        project4.put("technologies", "React.js, Spring Boot, REST APIs, MySQL");
        project4.put("link", "https://insura-sphere.vercel.app/");
        projects.add(project4);

        model.addAttribute("projects", projects);

        // ---------------- EXPERIENCE ----------------
        List<Map<String, String>> experiences = new ArrayList<>();

        Map<String, String> exp1 = new LinkedHashMap<>();
        exp1.put("title", "Computer Programmer");
        exp1.put("company", "Ahilyanagar Cantonment Board (Government)");
        exp1.put("period", "July 2024 – August 2025");
        exp1.put(
                "description",
                "Developed and maintained government web systems. "
                        + "Handled application support, system enhancements, data management, and technical assistance "
                        + "to senior officials and departments.");
        experiences.add(exp1);

        model.addAttribute("experiences", experiences);

        // ---------------- SKILLS ----------------
        List<String> skills = List.of(
                "React.js",
                "JavaScript (ES6+)",
                "HTML5",
                "CSS3",
                "Tailwind CSS",
                "Java",
                "Spring Boot",
                "Spring MVC",
                "REST APIs",
                "MySQL",
                "Git & GitHub",
                "Vercel");

        model.addAttribute("skills", skills);

        return "index";
    }
}