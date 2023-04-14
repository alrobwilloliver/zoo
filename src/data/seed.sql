INSERT INTO enclosure (id, name, description, at_capacity, created_at) VALUES
    (1, "Big Bird Corner", "Cage for birds of the world, flying and non flying in one large location (no predators)", false, now()),
    (2, "The Large Ice Pool - Too Cool For School", "The Large Ice Pool - Too Cool For School", false, now()),
    (3, "Small Python Exhibit", "A small enclosure for python snake species", false, now());

INSERT INTO animal (id, name, type, enclosureId, species) VALUES
    (1, "bonnie", "bird", 1, "chicken"),
    (2, "clyde", "bird", 1, "chicken"),
    (3, "maggie", "bird", 1, "chicken"),
    (4, "britney", "bird", 1, "chicken"),
    (5, "sam", "reptile", 3, "python"),
    (6, "harris", "reptile", 3, "python"),
    (7, "brett", "mammal", 2, "polar bear"),
    (8, "wendy", "mammal", 2, "polar bear");








