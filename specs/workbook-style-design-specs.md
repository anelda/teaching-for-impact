# Workbook Style + Design Specification (v1)  
**Teaching for Impact: Designing Effective & Open Training**

---

# 1. Purpose of this Specification

This document defines the **structural, stylistic, and pedagogical rules** for all sections in the workbook.

Its purpose is to ensure:
- consistency across all sections  
- alignment with evidence-based learning principles  
- clarity and usability in low-resource, real-world contexts  
- compatibility with Material for MkDocs  

This is the single source of truth for rewriting and maintaining the workbook.

---

# 2. Core Design Principles

## 2.1 Design for use, not reading
- Content must support decision-making and action
- Avoid purely descriptive or theoretical explanations

## 2.2 Context-first, not content-first
- Always anchor concepts in:
  - real-world constraints  
  - learner realities  
  - practical application  

## 2.3 Progressive disclosure
- Start simple, then add depth where needed
- Avoid overwhelming novice educators

## 2.4 Reuse-oriented design
- Content should model:
  - clarity  
  - modularity  
  - adaptability  

## 2.5 Consistency over creativity
- Use standardised structures and patterns
- Avoid inventing new formats per section

---

# 3. Standard Section Structure (MANDATORY)

Every section MUST follow this structure exactly:

## [Section Title]

[Learning Outcomes + Guiding Questions Table]

## Why this matters

[Context + problem framing]

!!! quote "This section helps you move from..."
    *“Before”*  
    to:  
    *“After”*

## Core concepts

[3–5 key concepts max]

!!! abstract "Concept name"
    [Clear, concise definition]

[Short explanation + why it matters]

## Practical guidance

[Actionable guidance structured as steps, decisions, or strategies]

## Example (REQUIRED)

[A concrete, realistic example]

- **Context:** ...
- **Decision:** ...
- **Action:** ...
- **Outcome:** ...

## In practice

👉 Use [Template X: Name](link)

Include:
- what to do  
- expected output  
- approximate time  

## Key takeaways

!!! tip "Key takeaway"
    [Insight 1]

!!! tip "Key takeaway"
    [Insight 2]

## Before you move on

You should now have:

- [Concrete output 1]  
- [Concrete output 2]  
- [Concrete output 3]

---

# 4. Formatting Rules (Material for MkDocs)

## 4.1 Admonitions (STRICT LIMITS)

Allowed types only:
- !!! tip
- !!! warning
- !!! abstract
- !!! quote

## 4.2 Admonition limits

Per section:
- Maximum 4 total admonitions
- Maximum 1 warning
- Maximum 2 tips
- Maximum 2 abstracts

## 4.3 Emoji usage

- Do not use emojis in headings  
- Do not mix emoji systems with admonitions  
- Emojis allowed only in activity prompts if necessary  

## 4.4 Tables

- Use consistent markdown tables  
- Keep formatting simple  
- Avoid nested complexity  

## 4.5 Lists

- Use short bullet lists  
- Maintain parallel structure  
- Avoid dense blocks  

---

# 5. Language and Tone Guidelines

## 5.1 Tone
- Clear, direct, professional  
- Supportive but concise  
- Avoid unexplained jargon  

## 5.2 Sentence structure
- Prefer short to medium sentences  
- Avoid long, layered sentences  

## 5.3 Terminology
- Define key terms once per section  
- Use consistently across the workbook  
- Avoid unnecessary synonyms  

## 5.4 Clarity rule
If a concept requires explanation during facilitation, it must be written clearly in the material.

---

# 6. Pedagogical Requirements (MANDATORY)

## 6.1 One worked example
- Realistic  
- Context-based  
- Shows decision-making  

## 6.2 One decision point

Explicitly include:
> What choice does the reader need to make here?

## 6.3 Explicit connection to previous section

Include:
> In the previous section, you...

## 6.4 Template integration

Each section must:
- reference at least one template  
- state what to do  
- state expected output  

## 6.5 Output-oriented closure

Each section must end with:
> Before you move on, you should now have...

---

# 7. Use of Examples (CRITICAL)

## 7.1 Requirements
Each section must include at least one example.

## 7.2 Example structure

### Example

**Context:**  
[Realistic scenario]

**Decision:**  
[What needed to be decided]

**Action:**  
[What was done]

**Outcome:**  
[Result]

## 7.3 Running case study

A single running case study should:
- evolve across sections  
- demonstrate cumulative design  
- connect decisions across the workbook  

---

# 8. Activity and Template Integration

## 8.1 Template references

Use:
👉 Use [Template X: Name](relative-link)

## 8.2 Must include
- what to do  
- expected output  
- approximate time  

## 8.3 Alignment rule
Templates must:
- support section outcomes  
- avoid unrelated tasks  

---

# 9. Managing Cognitive Load

## 9.1 Chunking
- Break content into small sections  
- Use clear headings  

## 9.2 Avoid overload
Do not:
- introduce too many concepts at once  
- mix theory, application, and nuance without structure  

## 9.3 Layering
- Core explanation first  
- Additional depth second  
- Examples last  

---

# 10. OER Integration Rules

## 10.1 Consistency
- Build from the bridging section  
- Avoid reintroducing concepts repeatedly  

## 10.2 Decision clarity
Include decisions around:
- reuse  
- adapt  
- create  

## 10.3 Licensing
Include:
- practical implications  
- trade-offs  
- real-world constraints  

---

# 11. Flow and Cross-Section Linking

## At the start
Reference previous section:
> In the previous section, you...

## At the end
Prepare for next section:
> In the next section, you will...

---

# 12. Quality Control Checklist

## Content
- [ ] Supports learning outcomes  
- [ ] Leads to decisions  
- [ ] Includes example  

## Structure
- [ ] Follows section template  
- [ ] Includes all components  

## Formatting
- [ ] Admonitions within limits  
- [ ] Clean markdown  

## Pedagogy
- [ ] Includes activity  
- [ ] Produces output  
- [ ] Connects to previous section  

## Clarity
- [ ] No ambiguity  
- [ ] Concepts explained clearly  

---

# 13. Versioning

- Version: v1  
- Status: Draft  

---

# 14. Implementation Plan

1. Apply to Module 1 Section 1  
2. Review and refine  
3. Update spec if needed  
4. Scale to all sections  

---

# End of Specification